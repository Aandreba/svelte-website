use vigilant_lamp::Script;
use wasm_bindgen::prelude::*;
use vigilant_lamp::extra::wasm_mappings::*;
use vigilant_lamp::renderers::webgl::WebGL;
use vigilant_lamp::{builder::build_webgl, PerspectiveCamera, MeshPrimitives, ObjectG, Renderer};

#[wasm_bindgen(start)]
pub fn main() -> Result<(),JsValue> {
    println!();
    map_panic();

    let camera = PerspectiveCamera::new((60f32).to_radians(), 0.01, 1000.);
    let (renderer, mut scene) = build_webgl("#gl", camera);

    let script = Script::of_update(|s, k, m, d| {
        let sec = d.as_secs_f32();
        let obj = &mut s.objects[0];

        obj.transform.rotate(sec, sec * 1.1, sec * 1.2)
    });
    scene.script = script;

    let cube = MeshPrimitives::cube(&renderer);
    let mut object = ObjectG::new(cube);

    object.transform.position[2] = -5.;
    object.transform.set_scale(0.5);

    scene.objects.push(object);
    renderer.run(scene);

    Ok(())
}
