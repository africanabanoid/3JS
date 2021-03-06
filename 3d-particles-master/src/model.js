import { GTLFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

class Model {
    constructor(obj){
        
        this.name = obj.name
        this.file = obj.file
        console.log(this.file)
        this.loader = new GTLFLoader()
        this.dracoLoader = new DRACOLoader()
        this.dracoLoader.setDecoderPath('./draco/')
        this.loader.setDRACOLoader(this.dracoLoader)
    
        this.init()
        }
    
    
    init(){
        this.loader.load(this.file, (response) => {
            console.log(response)
        })
    }
    
}
export default Model