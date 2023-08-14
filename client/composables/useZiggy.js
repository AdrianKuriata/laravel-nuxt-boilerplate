import route from 'ziggy-js'
import { Ziggy } from '@@/resources/js/ziggy'

export const useZiggy = (r, params = {}, absolute = null) => {
    return route(r, params, absolute, Ziggy)
}
