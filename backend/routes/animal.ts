import express, {Request, Response} from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('GET animals');
})


router.get('/:?', (req: Request, res: Response) => {
    res.send('GET 2 animals');
})


export default router