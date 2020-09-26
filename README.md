# angular-tawk

## Installation
`npm install angular-tawk`

## Usage
An Angular component to integrate Tawk. Tested with Angular 7.

Including "AngularTawkComponent" in "exports" or "imports", depending on the setup of your project


### Module
```
import { AngularTawkComponent } from 'angular-tawk';

@NgModule({
  exports: [
    AngularTawkComponent
  ]
})
export class AppModule { }
```

### Component
```
<angular-tawk [id]="tawkId" isVisibleOnMobile="yes"></angular-tawk>
```

The `id` parameter is for the string value identifying your account with Tawk. It is a hexadecimal string, 22 characters long, found in the code Tawk suggests you embed during the setup process.

The `isVisibleOnMobile` option is for tawk widgets to be displayed in the web and not in mobile.
`isVisibleOnMobile` value = "yes" or "no".
This widget always visible on web.
