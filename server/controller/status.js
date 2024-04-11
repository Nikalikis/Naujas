import { Router } from 'express';
import status from '../model/status.js';

const router = Router();




router.get('/project', async (req, res) => {
    try {
     
       res.json(await status
                        .find()
                        .populate('statusas', ['status'])
                        
        );
    } catch {
        res.status(500).json('ivyko prisijungimo klaida')
    }
});


export default router;