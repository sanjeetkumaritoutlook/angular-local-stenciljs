# AngularCoP

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.

To use stenciljs components with a local npm link:
1. in your stenciljs project, run `npm run build`, then `npm link`
3. in this project, run `npm link project-name`

# Fix for 'error:03000086:digital envelope routines::initialization error'
set NODE_OPTIONS=--openssl-legacy-provider

# npm install invalid version error
https://stackoverflow.com/questions/27543013/npm-install-fails-invalid-version

Delete the node_modules folder
Delete package-lock.json file
run 
npm cache clean --force
npm install --force

# set to public registry
npm config set registry https://registry.npmjs.org/

# best way to track live installation of package
npm install --verbose

https://stackoverflow.com/questions/16873973/npm-install-hangs

# add to gitignore
https://stackoverflow.com/questions/70479721/folder-added-it-gitignore-still-showing-up-in-the-git-changes

# package-lock.json
https://stackoverflow.com/questions/54124033/deleting-package-lock-json-to-resolve-conflicts-quickly

# Update Specific Package to the Latest Version:

npm update stenciljs-components

# rename a local git branch
https://sentry.io/answers/rename-a-local-git-branch/

# to uninstall  "stenciljs-components": "^0.0.1",
npm uninstall stenciljs-components

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


------------
FLUID components are web components, not Angular, so they don't natively look for the Angular router, instead, offering an agnostic way to handle routing depending on your framework.
 
In Angular, you would handle the route changed using the Router and the navigate function to route to the requested route in response to the menuItemClicked event.
 
e.g 
 
<fluid-page (menuItemClicked)="handleMenuItemClicked($event)">
<codeblock>
handleMenuItemClicked(menuClickEvent) {
    const route = menuClickEvent.detail;
    this.router.navigate([route]);
  }
 </codeblock>
  https://stackblitz.com/edit/angular-ivy-ftdguh?file=src%2Fapp%2Fsandbox%2Fsandbox.component.html


 Similarly, FLUID form elements have their own state management system, so do not natively bind to FormControl - You can do it, but it isn't a recommended approach, as it would be a double-hop to respond to FLUID events to then update a form control.
 
This example shows how you can;
https://stackblitz.com/edit/angular-ivy-i6dark?file=src%2Fapp%2Fapp.component.ts

Our recommended approach is to use FLUID forms native state management instead. It works in very similar way to Angular, but is built to be transportable across frameworks.
 
