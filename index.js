/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let negative_count = 0;

    for(let row of grid){
        let low = 0;
        let high = row.length -1;

        while(low <= high){
            let mid = (low+high) >> 1;
            if(row[mid] < 0){
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        negative_count += row.length - low;
    }

    return negative_count;
};
