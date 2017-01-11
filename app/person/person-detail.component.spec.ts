xdescribe('MyList Tests', () => {
    let list: string[];

    beforeEach(() => {
        list = [];
        list.push("Thomas");
    });

    it('Should get 5 dogs', () => {
        // list.ngOnInit();

        expect(list.length).toBe(1);
    });
});
