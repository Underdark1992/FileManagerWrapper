## File Manager wrapper for validation feedback widget

### Description:

* Widget to wrap mendix file manager to provide validation feedback in the same style as normal attributes field. In normal cases when there is validation in the file uploader (e.g: to check if file has been uploaded) the validation appeared as pop up box rather than under the field. This widget solve that issue by acting as a container.


### Features:

* As it is described above. Widget allows selection on which attribute of filedocument we want to validate on. This attribute needs to be set to be the same as the one set in the validation feedback action.

### How to use:

* Place widget on page
* Place file manager inside widget content
* Set file manager show label to off
* Set wrapper widget to whatever label you want
* In the widget set the attribute we are trying to validate against
* Drink tea and watch magic happens


### Limitations

* No custom styling can be applied to it. Uses the same standard styling as normal validation widget.

### Future enhancements

* Custom styling

### Useful links:

[GitHub](https://github.com/Underdark1992/FileManagerWrapper/edit/main/README.md)
[Demo](https://longtermtestingapp-sandbox.mxapps.io/index.html?profile=Responsive)

![alt text](image.png)

  
## Demo project
[link to sandbox]

## Issues, suggestions and feature requests
[link to GitHub issues]

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

[specify contribution]
