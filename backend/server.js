import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'a joke',
            content: 'this is a joke 1'
        },
        {
            id: 2,
            title: 'a joke',
            content: 'this is a joke 2'
        },
        {
            id: 3,
            title: 'a joke',
            content: 'this is a joke 3'
        },
        {
            id: 4,
            title: 'a joke',
            content: 'this is a joke 4'
        },
        {
            id: 5,
            title: 'a joke',
            content: 'this is a joke 5'
        }
    ];
    res.send(jokes); // Corrected this line
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
