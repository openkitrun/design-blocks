import { removeEmptyObjects } from '..';

describe('removeEmptyObjects', () => {
  it('should remove empty objects from array', () => {
    const stylesList = [{}, { color: 'red' }, {}, { size: 10 }];
    expect(removeEmptyObjects(stylesList)).toEqual([{ color: 'red' }, { size: 10 }]);
  });

  it('should return an empty array if all objects are empty', () => {
    expect(removeEmptyObjects([{}, {}])).toEqual([]);
  });
});
