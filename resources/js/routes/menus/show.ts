import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\MenuController::show
 * @see app/Http/Controllers/MenuController.php:56
 * @route /dashboard/menus/{menu}
 */
export const show = (args: { menu: string | number } | [menu: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '\/dashboard\/menus\/{menu}',
}

/**
 * @see \App\Http\Controllers\MenuController::show
 * @see app/Http/Controllers/MenuController.php:56
 * @route /dashboard/menus/{menu}
 */
show.url = (args: { menu: string | number } | [menu: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu: args }
    }

    if (Array.isArray(args)) {
        args = {
            menu: args[0],
        }
    }

    const parsedArgs = {
        menu: args.menu,
    }

    return show.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\MenuController::show
 * @see app/Http/Controllers/MenuController.php:56
 * @route /dashboard/menus/{menu}
 */
show.get = (args: { menu: string | number } | [menu: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\MenuController::show
 * @see app/Http/Controllers/MenuController.php:56
 * @route /dashboard/menus/{menu}
 */
show.head = (args: { menu: string | number } | [menu: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

export default show