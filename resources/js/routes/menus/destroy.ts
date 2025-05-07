import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\MenuController::destroy
 * @see app/Http/Controllers/MenuController.php:97
 * @route /dashboard/menus/{menu}
 */
export const destroy = (args: { menu: number | { id: number } } | [menu: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '\/dashboard\/menus\/{menu}',
}

/**
 * @see \App\Http\Controllers\MenuController::destroy
 * @see app/Http/Controllers/MenuController.php:97
 * @route /dashboard/menus/{menu}
 */
destroy.url = (args: { menu: number | { id: number } } | [menu: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return destroy.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\MenuController::destroy
 * @see app/Http/Controllers/MenuController.php:97
 * @route /dashboard/menus/{menu}
 */
destroy.delete = (args: { menu: number | { id: number } } | [menu: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

export default destroy