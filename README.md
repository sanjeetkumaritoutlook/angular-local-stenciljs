# AngularCoP

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.

To use stenciljs components with a local npm link:
1. in your stenciljs project, run `npm run build`, then `npm link`
3. in this project, run `npm link project-name`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# angular-local-stenciljs
angular-local-stenciljs

# how to use custom Elements (web components)
in React:
initialValue={'My Initial Value'}

in Angular:
initial-value="My Initial Value"

In Angular, variable properties use camelCase  or kebab-case
[initalValue]="myVariable"   should work


In Angular, use camelCase when it's a complex variable(and wrapped in [ ])
You should use kebab-case for primitive properties per the Custom Element Spec.
display-stepper-buttons="false"

For simple props, you should just be able to use interpolation.


React doesn't support web components natively (yet in React v18.3), so it doesn't support camelCase for Prop names-
instead React use dash-case for Primitive type Props

auto-focus={true}


for complex/reference type Props(e.g. objects,arrays,etc.), but can also be used for primitive types as well

The inline properties won't work without a ref as React doesn't support complex props on web components without them. Only primitives can be passed to web components as inline props (in React)

const inputRef = useCustomElementRef({},
{label: 'Prop Format 3 (Complex/Reference Types)', autofocus:true}
);

<fluid-input-field ref={inputRef}></fluid-input-field>
(or)
return(
<fluid-form ref={useCustomElementRef({
valueChanged: (event) => handleValueChanged(event.detail)
},{
config: formConfig,
})}/>

FLUID React utils package, which provide wrappers around the runtime components to make it easier for React development.

in React, circled props won't work
