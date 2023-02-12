const unionFind = (edges) => {
    let parent = [];

    for (let i = 0; i <= edges.length; i += 1) {
        parent.push(i);
    }

    // finding the parent of p
    const find = (p) => {
        if (parent[p] === p) {
            return p;
        } else {
            return find(parent[p]);
        }
    };

    const union = (u, v) => {
        let parentU = find(u);
        let parentV = find(v);

        // u becomes the parent of v ;
        parent[parentU] = parentV;
    };
};