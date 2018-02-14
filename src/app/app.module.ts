import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'codemirror/mode/go/go';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/shell/shell';
import 'codemirror/mode/markdown/markdown';

import { AppComponent } from './app.component';
import { ProjectComponent } from './projects/project/project.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatTooltipModule,
  MatMenuModule,
  MatSnackBar,
  MatToolbarModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatDialogModule,
  MatDialog,
  MatListModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatSliderModule
} from '@angular/material';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { HomeComponent } from './home/home.component';
import { MomentModule } from 'angular2-moment';
import { SqlComponent } from './projects/project/sql/sql.component';
import { BuildsComponent } from './projects/project/builds/builds.component';
import { CodeComponent } from './projects/project/code/code.component';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import { SessionService } from './session.service';
import { ChargeService } from './charge.service';
import { DemoComponent } from './home/demo/demo.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { FilterPipe } from './filter.pipe';
import { LoginDialogService } from './login/login-dialog.service';
import { UserService } from './user.service';
import { CreateProjectComponent } from './projects/create-project/create-project.component';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { CreateProjectDialogComponent } from './projects/create-project-dialog/create-project-dialog.component';
import { CreateProjectDialogService } from './projects/create-project-dialog.service';
import 'hammerjs';
import { IssueComponent } from './projects/project/issues/issue/issue.component';
import { CreateIssueDialogService } from './projects/project/issues/create-issue-dialog.service';
import { IssuesComponent } from './projects/project/issues/issues.component';
import { PricingComponent } from './home/pricing/pricing.component';
import { CreateIssueComponent } from './projects/project/issues/create-issue/create-issue.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { LengthPipe } from './length.pipe';
import { ResetComponent } from './reset/reset.component';
import { RecoverComponent } from './recover/recover.component';
import { PostsComponent } from './author/posts/posts.component';
import { TokensComponent } from './author/tokens/tokens.component';
import { ProfileEditComponent } from './author/profile-edit/profile-edit.component';
import { TokenService } from './token.service';
import { CommentService } from './comment.service';
import { ProjectService } from './project.service';
import { ProjectStatusComponent } from './projects/project/code/project-status/project-status.component';
import { StarButtonComponent } from './projects/star-button/star-button.component';
import { CommentComponent } from './projects/project/issues/issue/comment/comment.component';
import { CreatePostComponent } from './author/posts/create-post/create-post.component';
import { PostComponent } from './author/posts/post/post.component';
import { PostService } from './post.service';
import { CreatePostDialogService } from './author/posts/create-post-dialog.service';
import { SettingsComponent } from './projects/project/settings/settings.component';
import { LogsComponent } from './projects/project/logs/logs.component';
import { ConfigComponent } from './config/config.component';
import { CodemirrorModule } from 'ng2-codemirror';

const appRoutes: Routes = [
  {
    path: 'reset/:secret',
    component: ResetComponent
  },
  {
    path: 'config',
    component: ConfigComponent
  },
  {
    path: 'recover',
    component: RecoverComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: ':author/p/:postId',
    component: PostComponent
  },
  {
    path: ':author/:project/issue/:issueId',
    component: ProjectComponent
  },
  {
    path: ':author/:project',
    component: ProjectComponent
  },
  {
    path: ':author/:project/:tab',
    component: ProjectComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: ':author',
    component: AuthorComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    AuthorComponent,
    LoginComponent,
    SqlComponent,
    BuildsComponent,
    CodeComponent,
    HomeComponent,
    DemoComponent,
    HeaderComponent,
    ProjectsComponent,
    FilterPipe,
    CreateProjectComponent,
    CreateProjectDialogComponent,
    IssuesComponent,
    IssueComponent,
    PricingComponent,
    CreateIssueComponent,
    ProjectListComponent,
    LengthPipe,
    ResetComponent,
    RecoverComponent,
    PostsComponent,
    TokensComponent,
    ProfileEditComponent,
    ProjectStatusComponent,
    StarButtonComponent,
    CommentComponent,
    CreatePostComponent,
    PostComponent,
    SettingsComponent,
    LogsComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    MarkdownToHtmlModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    FlexLayoutModule,
    MomentModule,
    SimpleNotificationsModule.forRoot(),
    MatMenuModule,
    MatDialogModule,
    Ng2PageScrollModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatListModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSliderModule,
    CodemirrorModule
  ],
  providers: [
    HttpClient,
    SessionService,
    LoginDialogService,
    UserService,
    CreateProjectDialogService,
    CreateIssueDialogService,
    ChargeService,
    ProjectService,
    TokenService,
    CommentService,
    PostService,
    CreatePostDialogService,
    Title
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateProjectComponent,
    CreateProjectDialogComponent,
    CreateIssueComponent,
    LoginComponent,
    CreatePostComponent
  ]
})
export class AppModule {}
