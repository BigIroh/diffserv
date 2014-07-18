	
var patch = function(original, patch) {
    var original_lines = original.split("\n");
    var patch_lines = patch.split("\n");
    var output_lines = [];
    var patch_index = 1;
    var copy_index = 0;
    while(patch_index < patch_lines.length) {
        var block_indices = patch_lines[patch_index].split(",");
        var block_start = block_indices[0];
        var block_end = block_indices[1];
        var block_inserts = block_indices[2];
        while(copy_index < block_start) {
            output_lines.push(original_lines[copy_index]);
            copy_index = copy_index + 1;
        }
        patch_index = patch_index + 1;
        for(i = 0; i < block_inserts; i++) {
            output_lines.push(patch_lines[patch_index])
            patch_index = patch_index + 1;
        }
        copy_index = Number(block_end);
    }
    while(copy_index < original_lines.length) {
        output_lines.push(original_lines[copy_index]);
        copy_index = copy_index + 1;
    }
    return output_lines.join("\n")
}

module.exports = patch;
