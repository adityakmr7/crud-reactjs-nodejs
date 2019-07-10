const express = require('express');
const mongoose = require('mongoose');
const Article = require('../models/Article');
mongoose.model('Article');
const router = express.Router();



/*
*   Search Api
* */

/**
 *  End poinst http://localhost:8080/search?q=${q}
 */
//
//
//
// router.get('/search', (req,res,next) => {
//     const result = Article.filter(art => {
//         new RegExp(`^${req.query.q}`).test(art)
//     })
//     res.json(result);
// });



/*
*   Delete Article
* */
router.delete('/delete/:articleId', (req, res, next) => {
    const id = req.params.articleId;
    Article.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({
                message: 'Article Deleted'
            })
        }).catch(err => {
            res.status(500).json({
                error: err
            })
    })
});

/*
    Update Article
* */
router.put('/update/:articleId', (req, res) => {
    const id = req.params.articleId;
    console.log(req.body);
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Article.updateOne({_id:id}, {$set: updateOps})
        .exec()
        .then(result => {
            if(!result) {
                res.status(400).json({
                    message: "something Went Wrong"
                });
            }else {
                res.status(200).json( {
                    message: "Article Updated"
                })
            }


        }).catch(err => {
            res.status(500).json({
                error: err
            });
    })

})


/*
*   localhost:8080/api
*   Display single Post
*
* */
router.get('/:articleId', (req, res, next) => {
    const id = req.params.articleId;
    Article.findById(id)
        .select('_id title body')
        .exec()
        .then(doc => {
            if(!doc) {
                res.status(404).json({
                    message: "No Post Found"
                })

            }else {
                res.status(200).json({
                    _id: doc._id,
                    title: doc.title,
                    body: doc.body,
                });
            }
    }).catch(err => {
        res.status(500).json({
            error: err
        })
    })
})


/*
*   localhost:8080/api/
*   Display Article
* */
router.get('/', (req, res, next) => {
    Article.find()
        .select('_id title body')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                articles: docs.map(doc => {
                    return {
                        _id: doc._id,
                        title: doc.title,
                        body: doc.body

                    }
                })
            }
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json({
                error: err
            })
    })
})


/*
*   localhost:8080/api/
*   Create Article
* */
router.post('/', (req, res, next) => {
    const article = new Article();
    article._id = new mongoose.Types.ObjectId(),
    article.title = req.body.title;
    article.body = req.body.body;

    article.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Article Created',
            createdArticle: {
                _id: result._id,
                title: result.title,
                body: result.body
            }
        }).catch(err => {
            res.status(500).json({
                error: err
            })
        })
    })

})



/*
*   Search Query
* */



module.exports = router;




