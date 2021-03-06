import MediaUploader from './media-uploader'
const { TextControl, TextareaControl, ToggleControl } = wp.components
import styles from './style.css'

const Field = (props) => {
    switch (props.type) {
        case 'text':
            return (
                <TextControl
                    label={props.label}
                    className={styles.textcontrol}
                    value={props.value}
                    onChange={props.onChange}
                />
            )
            break;
        case 'textarea':
            return (
                <TextareaControl
                    label={props.label}
                    className={styles.textareacontrol}
                    value={props.value}
                    onChange={props.onChange}
                />
            )
            break;
        case 'toggle':
            return (
                <ToggleControl
                    label={props.label}
                    className={styles.togglecontrol}
                    checked={props.value}
                    onChange={props.onChange}
                />
            )
            break;
        case 'media':
            return (
                <MediaUploader 
                    mediaTypes={['image']}
                    label={props.label}
                    value={props.value}
                    onChange={props.onChange}
                />
            )
            break;
    }
}

export default Field