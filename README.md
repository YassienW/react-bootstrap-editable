# React Bootstrap Editable
 
Clean editable bootstrap components for react. Ajax support!

**Project is under rapid development, always check the
[documentation](https://yassienw.github.io/react-bootstrap-editable/) 
for the latest additions**

## Installation

```bash
npm i react-bootstrap-editable
```

## Changelog:
### 0.4.0:
- Added className prop
- Updating initialValue prop without remounting now updates the editable value
- Date editable accepts any string, parsing to Date object is done internally
- Loading spinner for ajax using the new BS4 [Spinners](https://getbootstrap.com/docs/4.3/components/spinners/)
- Added File editable
- Popover mode added
- Added Text Area editable
- Removed col size props, the editable now automatically takes full width of parent container
- Editable now uses flexbox to perfectly fit the items in whatever space is available 
### 0.3.0:
- Switched components to use form rows instead of inline forms
- Added props to control col width for the input and controls
- Added label and id props
- All combinations of the disabled, clickable and label props now work together
- Beefed up documentation
