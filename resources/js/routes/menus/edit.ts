import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\MenuController::edit
 * @see app/Http/Controllers/MenuController.php:64
 * @route /dashboard/menus/{menu}/edit
 */
export const edit = (args: { menu: number | { id: number } } | [menu: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '\/dashboard\/menus\/{menu}\/edit',
}

/**
 * @see \App\Http\Controllers\MenuController::edit
 * @see app/Http/Controllers/MenuController.php:64
 * @route /dashboard/menus/{menu}/edit
 */
edit.url = (args: { menu: number | { id: number } } | [menu: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { menu: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            menu: args[0],
        }
    }

    const parsedArgs = {
        menu: typeof args.menu === 'object'
            ? args.menu.id
            : args.menu,
    }

    return edit.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\MenuController::edit
 * @see app/Http/Controllers/MenuController.php:64
 * @route /dashboard/menus/{menu}/edit
 */
edit.get = (args: { menu: number | { id: number } } | [menu: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\MenuController::edit
 * @see app/Http/Controllers/MenuController.php:64
 * @route /dashboard/menus/{menu}/edit
 */
edit.head = (args: { menu: number | { id: number } } | [menu: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})

export default edit