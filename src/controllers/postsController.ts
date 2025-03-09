import { Request, Response, Router } from 'express';
import { getPosts, getPostById } from '../services/postsService';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const posts = await getPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const post = await getPostById(parseInt(req.params.id));
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;