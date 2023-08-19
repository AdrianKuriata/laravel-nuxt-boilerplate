<template>
    <div class="fixed right-10 bottom-10 w-1/5">
        <div v-for="(toast, index) in store.toasts" class="border rounded" :class="{ [getVariant(toast.variant)]: true, 'mt-3': index > 0}" :key="index">
            <div class="rounded-t border-b border-neutral-dark p-2 flex justify-between items-center">
                {{ getTitle(toast.title) }}
                <fa-icon :icon="['fa', 'fa-times']" class="cursor-pointer hover:text-slate-300" @click="store.drop(index)" />
            </div>
            <div class="p-2">
                {{ toast.text }}
            </div>
        </div>
    </div>
</template>
<script setup>
const { t } = useI18n()

const store = useToastStore()
const getTitle = (title) => title ?? t('Notify')

const getVariant = (variant) => {
    switch (variant) {
        case 'primary':
            return 'border-primary-dark bg-primary text-white'
        case 'secondary':
            return 'border-secondary-dark bg-secondary text-white'
        case 'success':
            return 'border-success-dark bg-success text-white'
        case 'error':
            return 'border-error-dark bg-error text-white'
        case 'warning':
            return 'border-warning-dark bg-warning text-white'
        case 'default':
            return 'border-neutral-dark bg-neutral text-white'
    }
}
</script>
