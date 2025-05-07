import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\MenuController::update
 * @see app/Http/Controllers/MenuController.php:72
 * @route /dashboard/menus/{menu}
 */
export const update = (args: { menu: number | { id: number } } | [menu: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '\/dashboard\/menus\/{menu}',
}

/**
 * @see \App\Http\Controllers\MenuController::update
 * @see app/Http/Controllers/MenuController.php:72
 * @route /dashboard/menus/{menu}
 */
update.url = (args: { menu: number | { id: number } } | [menu: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return update.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\MenuController::update
 * @see app/Http/Controllers/MenuController.php:72
 * @route /dashboard/menus/{menu}
 */
update.put = (args: { menu: number | { id: number } } | [menu: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

/**
 * @see \App\Http\Controllers\MenuController::update
 * @see app/Http/Controllers/MenuController.php:72
 * @route /dashboard/menus/{menu}
 */
update.patch = (args: { menu: number | { id: number } } | [menu: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

export default update