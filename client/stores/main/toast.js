import { acceptHMRUpdate, defineStore } from 'pinia'

export const useToastStore = defineStore('toast', {
    state: () => ({
        toasts: []
    }),
    actions: {
        drop(index) {
            this.toasts.splice(index, 1)
        },
        alert(text, title = null, variant = 'primary') {
            this.toasts.push({
                title: title,
                text: text,
                variant: variant
            })
        },
        primary(text, title = null) {
            this.toasts.push({
                title: title,
                text: text,
                variant: 'primary'
            })
        },
        secondary(text, title = null) {
            this.toasts.push({
                title: title,
                text: text,
                variant: 'secondary'
            })
        },
        success(text, title = null) {
            this.toasts.push({
                title: title,
                text: text,
                variant: 'success'
            })
        },
        warning(text, title = null) {
            this.toasts.push({
                title: title,
                text: text,
                variant: 'warning'
            })
        },
        error(text, title = null) {
            this.toasts.push({
                title: title,
                text: text,
                variant: 'error'
            })
        },
        neutral(text, title = null) {
            this.toasts.push({
                title: title,
                text: text,
                variant: 'neutral'
            })
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useToastStore, import.meta.hot))
}
