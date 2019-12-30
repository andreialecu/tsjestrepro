describe('hello', () => {
  it('recognizes ts 3.7 syntax', () => {
    const hi: any = {};
    expect(hi?.test?.hello);
  })
})