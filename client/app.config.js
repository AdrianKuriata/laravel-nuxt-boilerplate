const size = 'md'
const mb = 'mb-3'
export default defineAppConfig({
    ui: {
        button: {
            default: {
                size: size
            }
        },
        formGroup: {
            default: {
                size: size
            },
            wrapper: mb
        }
    }
})
