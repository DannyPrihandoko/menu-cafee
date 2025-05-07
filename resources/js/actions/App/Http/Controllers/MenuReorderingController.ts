import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\MenuReorderingController::MenuReorderingController
 * @see app/Http/Controllers/MenuReorderingController.php:14
 * @route /dashboard/menus/reorder
 */
const MenuReorderingController = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: MenuReorderingController.url(options),
    method: 'put',
})

MenuReorderingController.definition = {
    methods: ['put'],
    url: '\/dashboard\/menus\/reorder',
}

/**
 * @see \App\Http\Controllers\MenuReorderingController::MenuReorderingController
 * @see app/Http/Controllers/MenuReorderingController.php:14
 * @route /dashboard/menus/reorder
 */
MenuReorderingController.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return MenuReorderingController.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\MenuReorderingController::MenuReorderingController
 * @see app/Http/Controllers/MenuReorderingController.php:14
 * @route /dashboard/menus/reorder
 */
MenuReorderingController.put = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: MenuReorderingController.url(options),
    method: 'put',
})

export default MenuReorderingController