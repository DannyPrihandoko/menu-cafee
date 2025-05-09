import { queryParams, type QueryParams } from './../../wayfinder'

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

export default store