// Here we are importing the styles from the stylesheet
import styles from './StylingCSSModules.module.css';

// Console logging the imported 'styles' shows that what we get
// is a JavaScript object, where the fields are the class names defined in the css
// It also prefixes the class name with name of the file
// and suffixes it with a unique identifier.
// All this is to avoid name collisions with othere CSS files
console.log(styles)

const StylingCSSModules = () => {
  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>CSS Modules</h1>
      <p className={styles.p}>This component utilizes CSS Modules for styling.</p>
    </div>
  );
};

export default StylingCSSModules;