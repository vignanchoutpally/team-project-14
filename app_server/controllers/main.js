/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'food recipes website' });
    };module.exports = {
        index
        };