<?php

namespace Uccellolabs\FilamentThemeColor;

use Filament\Events\ServingFilament;
use Filament\Facades\Filament;
use Filament\PluginServiceProvider;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\HtmlString;
use Spatie\LaravelPackageTools\Package;

class FilamentThemeColorProvider extends PluginServiceProvider
{
    public static string $name = 'filament-theme-color';

    protected array $scripts = [
        'filament-theme-color-scripts' => __DIR__ . '/../public/build/assets/theme-color-changer.923dc927.js',
    ];

    public function configurePackage(Package $package): void
    {
        $package->name(static::$name);
    }
}
