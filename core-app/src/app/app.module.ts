import { BrowserModule } from '@angular/platform-browser';
import { COMPILER_OPTIONS,CompilerFactory,Compiler,NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Required by the SystemJS
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

export function createCompiler(fn: CompilerFactory): Compiler {     
  return fn.createCompiler();
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: COMPILER_OPTIONS,
    useValue: {},
    multi: true
  },
  {
    provide: CompilerFactory,
    useClass: JitCompilerFactory,
    deps: [COMPILER_OPTIONS]
  },
  {
    provide: Compiler,
    useFactory: createCompiler,
    deps: [CompilerFactory]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
