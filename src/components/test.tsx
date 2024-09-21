import classes from  './test.module.css';

console.log(classes);

const Test = () => {
    return (
        <div>
            Lorem ipsum dolor sit amet.

            <section className={classes.card}>
                Lorem ipsum dolor.
            </section>
            <section className={classes.card2}>
                222 Lorem ipsum dolor.
            </section>
        </div>
    );
};

export default Test;