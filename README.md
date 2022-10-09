[![Latest Version on Packagist](https://img.shields.io/packagist/v/uccellolabs/filament-theme-color.svg?style=flat-square)](https://packagist.org/packages/uccellolabs/filament-theme-color)
[![Total Downloads](https://img.shields.io/packagist/dt/uccellolabs/filament-theme-color.svg?style=flat-square)](https://packagist.org/packages/uccellolabs/filament-theme-color)

# Filament Theme Color

Easy way to change filament theme color on the fly.

In some projects, it is interesting to be able to change the main colors of a theme.

For example, if you manage several tenants, you may want to assign different colors to each tenant. Or maybe depending on the user's role, you want a different theme color.

This library allows to assign a primary and a secondary color to the theme.

## Installation

You can install the package via composer:

```bash
composer require uccellolabs/filament-theme-color
```

## Configuration

Since Filament's styles are compiled in a CSS file, it is not easy to modify the colors of the theme.

So we will create a palette made of CSS variables instead of colors.

Then, we will just have to update the CSS variables so that the colors change automatically.

### Create a custom theme

We will start by following the instructions to create a custom theme for Filament.

You can do it by following the instructions here: https://filamentphp.com/docs/2.x/admin/appearance#building-themes

### Configure theme colors

Modify the `tailwind.config.js` file as follows to use CSS variables instead of colors:

```js
module.exports = {
  // ...
  theme: {
    extend: {
      colors: {
        primary: {
          50: "rgb(var(--theme-primary-color-var-50) / <alpha-value>)",
          100: "rgb(var(--theme-primary-color-var-100) / <alpha-value>)",
          200: "rgb(var(--theme-primary-color-var-200) / <alpha-value>)",
          300: "rgb(var(--theme-primary-color-var-300) / <alpha-value>)",
          400: "rgb(var(--theme-primary-color-var-400) / <alpha-value>)",
          500: "rgb(var(--theme-primary-color-var-500) / <alpha-value>)",
          600: "rgb(var(--theme-primary-color-var-600) / <alpha-value>)",
          700: "rgb(var(--theme-primary-color-var-700) / <alpha-value>)",
          800: "rgb(var(--theme-primary-color-var-800) / <alpha-value>)",
          900: "rgb(var(--theme-primary-color-var-900) / <alpha-value>)",
        },
        secondary: {
          50: "rgb(var(--theme-secondary-color-var-50) / <alpha-value>)",
          100: "rgb(var(--theme-secondary-color-var-100) / <alpha-value>)",
          200: "rgb(var(--theme-secondary-color-var-200) / <alpha-value>)",
          300: "rgb(var(--theme-secondary-color-var-300) / <alpha-value>)",
          400: "rgb(var(--theme-secondary-color-var-400) / <alpha-value>)",
          500: "rgb(var(--theme-secondary-color-var-500) / <alpha-value>)",
          600: "rgb(var(--theme-secondary-color-var-600) / <alpha-value>)",
          700: "rgb(var(--theme-secondary-color-var-700) / <alpha-value>)",
          800: "rgb(var(--theme-secondary-color-var-800) / <alpha-value>)",
          900: "rgb(var(--theme-secondary-color-var-900) / <alpha-value>)",
        },
        //...
      },
    },
  },
  // ...
};
```

Then run the `npm run dev` command to compile the new theme.

The package uses the [palettey](https://www.npmjs.com/package/palettey) library which allows to generate a palette from a simple color.

## Usage

It is now possible to easily change the colors of the theme.

To do so, modify the `app/Providers/AppServiceProvider.php` file as follows:

```php
public function boot()
{
    // ...
    Filament::serving(function () {
        // ...
        $primaryColor = '#FF8834'; // For example, put your tenant primary color here
        $secondaryColor = '#BBAA87'; // For example, put your tenant secondary color here

        Filament::pushMeta([
            new HtmlString('<meta name="theme-primary-color" id="theme-primary-color" content="' . $primaryColor . '">' .
                '<meta name="theme-secondary-color" id="theme-secondary-color" content="' . $secondaryColor . '">'),
        ]);
    });
}
```

You can now use all the primary and secondary colors of the generated palettes:

```html
<button class="bg-primary-200">Click me</button>

<span class="text-secondary-500">I'm awesome!</span>
```

If you want to do a live preview, it is possible to change the color with a custom event.

```js
const event = new CustomEvent("change-theme-color", {
  detail: { primaryColor: "#ff0000", secondaryColor: "#558899" },
});
window.dispatchEvent(event);
```

It is also possible to do it from Livewire :

```php
$this->dispatchBrowserEvent('change-theme-color', ['primaryColor' => '#ff0000', 'secondaryColor' => '#558899']);
```

## Credits

- [Uccellolabs](https://github.com/uccellolabs)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
