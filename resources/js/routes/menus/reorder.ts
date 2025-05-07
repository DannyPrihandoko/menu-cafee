import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\MenuReorderingController::reorder
 * @see app/Http/Controllers/MenuReorderingController.php:14
 * @route /dashboard/menus/reorder
 */
export const reorder = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: reorder.url(options),
    method: 'put',
})

reorder.definition = {
    methods: ['put'],
    url: '\/dashboard\/menus\/reorder',
}

/**
 * @see \App\Http\Controllers\MenuReorderingController::reorder
 * @see app/Http/Controllers/MenuReorderingController.php:14
 * @route /dashboard/menus/reorder
 */
reorder.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return reorder.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\MenuReorderingController::reorder
 * @see app/Http/Controllers/MenuReorderingController.php:14
 * @route /dashboard/menus/reorder
 */
reorder.put = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: reorder.url(options),
    method: 'put',
})

export default reorder