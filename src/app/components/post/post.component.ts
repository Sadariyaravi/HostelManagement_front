import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HasElementRef } from '@angular/material/core/common-behaviors/color';
import { faL } from '@fortawesome/free-solid-svg-icons';
import {
  catchError,
  debounceTime,
  distinct,
  distinctUntilChanged,
  fromEvent,
  map,
  of,
  pipe,
  switchMap,
  throwError,
} from 'rxjs';
import Posts from 'src/app/models/DBmodels/Post';
import { NewsPostService } from 'src/app/services/news-post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit, AfterViewInit {
  findSearchPost: boolean = false;
  allPosts!: Array<Posts>;
  @ViewChild('Searchbar') Searchbar!: ElementRef;

  constructor(private PostService: NewsPostService) {}

  ngAfterViewInit(): void {
    const searchpost = fromEvent<any>(
      this.Searchbar.nativeElement,
      'keyup'
    ).pipe(
      map((event) => event.target.value),
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((data) => this.PostService.SearchByTitle(data))
    );

    searchpost.subscribe({
      next: (Post) => {
        this.findSearchPost = true
        if (Post.length <= 0) {
          this.findSearchPost = false;
        }
        this.allPosts = Post;
      },
      error: (errors) => {
        console.log(errors);
      },
      complete: () => {
        console.log('searching Complete');
      },
    });
  }

  ngOnInit(): void {
    try {
      this.GetAllPosts();
    } catch (err) {
      console.log(err);
    }
  }

  GetAllPosts() {
    // this.PostService.GetPostsForUsers().subscribe({
    //   next: (data) => {
    //     console.log(data)
    //     this.allPosts = data;
    //   },
    //   error: (errors) => {
    //     console.log(errors);
    //   },
    //   complete: () => {
    //     console.log('complete');
    //   },
    // });
    this.PostService.GetPostsForUsers()
      .pipe(
        catchError((err) => {
          console.log(err);
          return throwError(err);
        }),
        catchError((err) => {
          console.log('rethrow --error --> ' + err);
          return of([]);
        })
      )
      .subscribe({
        next: (data) => {
          console.log(data);
          this.allPosts = data;
          if (this.allPosts.length <= 0) {
            this.findSearchPost = false;
          } else {
            this.findSearchPost = true;
          }
        },
        error: (errors) => {
          console.log(errors);
        },
        complete: () => {},
      });
  }
}
