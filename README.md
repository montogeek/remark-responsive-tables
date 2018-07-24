# remark-responsible-tables

Creates a responsibe table by extracting `thead` titles and injecting them into each `tbody` row,
those are hidded by default on desktop with CSS and displayed on mobile.

## Options

`classnames` (required) Object

Classnames for each element:

- `title`: `thead` titles
- `description`: Second column description
- `content`: Element that encapsulates description shown on mobile
- `mobile`: Media query class for mobile
- `description`: Media query class for desktop

```js
{
  'title': 'title',
  'description': 'description',
  'content': 'content',
  'mobile': 'mobile',
  'desktop': 'desktop'
}
```

## Example

### Mobile

![image](https://user-images.githubusercontent.com/1002461/42291636-391ad9b4-7fcd-11e8-9e0a-98637a8eb3f5.png)

### Desktop

![image](https://user-images.githubusercontent.com/1002461/42291633-342c0f54-7fcd-11e8-93a6-0533a4bf2c03.png)

### Code

**Options**

```js
{
  'classnames': {
    'title': 'title',
    'description': 'description',
    'content': 'content',
    'mobile': 'mobile',
    'desktop': 'desktop'
  }
}
```

```css
thead {
  display: none;

  /* Mobile */
   {
    display: table-header-group;
  }
}

td {
  display: flex;
  flex-basis: 100%;
  align-self: stretch;

  /* Mobile */
   {
    display: table-cell;
  }
}

.titles {
  display: flex;
  flex-direction: column;
  justify-content: baseline;

  /* Mobile */
   {
    display: none;
  }
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: baseline;
}

.description.desktop {
  display: none;

  /* Mobile */
   {
    display: block;
  }
}

.description.mobile {
  /* Mobile */
   {
    display: none;
  }
}
```
