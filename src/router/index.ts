import { createRouter, createWebHashHistory,  } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHashHistory(),
  routes:[...routes]
})

export async function setupRoute(){
  
}

export default router