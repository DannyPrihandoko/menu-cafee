import reorder from './reorder'
import create from './create'
import store from './store'
import show from './show'
import edit from './edit'
import update from './update'
import destroy from './destroy'
import { queryParams, type QueryParams } from './../../wayfinder'

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

const menus = {
    reorder, 
    index, 
    create, 
    store, 
    show, 
    edit, 
    update, 
    destroy,
}

export default menus