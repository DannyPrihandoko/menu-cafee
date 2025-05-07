import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\MenuController::index
 * @see app/Http/Controllers/MenuController.php:16
 * @route /dashboard/menus
 */
export const index = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ['get','head'],
    url: '\/dashboard\/menus',
}

/**
 * @see \App\Http\Controllers\MenuController::index
 * @see app/Http/Controllers/MenuController.php:16
 * @route /dashboard/menus
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\MenuController::index
 * @see app/Http/Controllers/MenuController.php:16
 * @route /dashboard/menus
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\MenuController::index
 * @see app/Http/Controllers/MenuController.php:16
 * @route /dashboard/menus
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\MenuController::create
 * @see app/Http/Controllers/MenuController.php:27
 * @route /dashboard/menus/create
 */
export const create = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ['get','head'],
    url: '\/dashboard\/menus\/create',
}

/**
 * @see \App\Http\Controllers\MenuController::create
 * @see app/Http/Controllers/MenuController.php:27
 * @route /dashboard/menus/create
 */
create.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return create.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\MenuController::create
 * @see app/Http/Controllers/MenuController.php:27
 * @route /dashboard/menus/create
 */
create.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\MenuController::create
 * @see app/Http/Controllers/MenuController.php:27
 * @route /dashboard/menus/create
 */
create.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\MenuController::store
 * @see app/Http/Controllers/MenuController.php:35
 * @route /dashboard/menus
 */
export const store = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ['post'],
    url: '\/dashboard\/menus',
}

/**
 * @see \App\Http\Controllers\MenuController::store
 * @see app/Http/Controllers/MenuController.php:35
 * @route /dashboard/menus
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\MenuController::store
 * @see app/Http/Controllers/MenuController.php:35
 * @route /dashboard/menus
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

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

const MenuController = { index, create, store, show, edit, update, destroy }

export default MenuController