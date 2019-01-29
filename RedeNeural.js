function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}
class RedeNeural {
    constructor(i_nodes, h_nodes, o_nodes) {
        this.i_nodes = i_nodes;
        this.h_nodes = h_nodes;
        this.o_nodes = o_nodes;

        this.bias_ih = new Matrix(this.h_nodes, 1);
        this.bias_ih.randomize();
        this.bias_ho = new Matrix(this.o_nodes, 1);
        this.bias_ho.randomize();

        this.weigths_ih = new Matrix(this.h_nodes, this.i_nodes);
        this.weigths_ih.randomize()

        this.weigths_ho = new Matrix(this.o_nodes, this.h_nodes)
        this.weigths_ho.randomize()
    }

    feedforward(arr) {
        // INPUT -> HIDDEN

        let input = Matrix.arrayToMatrix(arr);

        let hidden = Matrix.multiply(this.weigths_ih, input);
        hidden = Matrix.add(hidden, this.bias_ih);

        hidden.map(sigmoid)

        // HIDDEN -> OUTPUT

        let output = Matrix.multiply(this.weigths_ho, hidden);
        output = Matrix.add(output, this.bias_ho);
        output.map(sigmoid);

        output.print();
    }
}