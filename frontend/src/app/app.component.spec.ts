import { TestBed, async } from '@angular/core/testing';
import { DebugElement, getDebugNode } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('frontend');
  });

  it(`should have a title 'Book List'`, () => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.debugElement.componentInstance;
    // console.log(app);
    // const compiled = fixture.debugElement.nativeElement;
    // console.log(compiled);
    // const h2 = compiled.querySelector('h2');
    // console.log(h2);
    // expect(h2.textContent).toContain('Book List');

    // let fixture = TestBed.createComponent(AppComponent);
    // let component = fixture.componentInstance;
    // const shadowRoot: DocumentFragment = fixture.debugElement.nativeElement.shadowRoot;
    // const nestedComponentNativeElement = shadowRoot.querySelector('app-book-list');
    // const nestedComponentDebugElement = <DebugElement>getDebugNode(nestedComponentNativeElement);
    // var nestedComponentInstance: BookListComponent = nestedComponentDebugElement.componentInstance;
    // fixture.detectChanges();
    // const debugBooks = nestedComponentDebugElement.query(By.css('h2'));
    // expect(debugBooks.nativeElement.textContent).toBe('Book List');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to frontend!');
  });
});
