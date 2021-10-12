import def from './services/default'
import burger from './modules/burger'
import btns from './modules/btns'
import progress from './modules/progress'

window.onload = function (){
    def();
    burger();
    btns();
    progress();
    
}