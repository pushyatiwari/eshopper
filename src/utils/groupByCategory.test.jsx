import { axiosDataGetItems, axiosDataGetOrders, axiosDataGetItemsResolved, axiosDataGetOrdersResolved } from '../mockData/mockData';
import { groupByCategory, groupOrderByCategory } from './groupByCategory';

describe('group by category', () => {
  test('should return grouped items by category', () => {
    const mockReturnValue = groupByCategory(axiosDataGetItems);
    expect(mockReturnValue).toStrictEqual(axiosDataGetItemsResolved);
  });
});
describe('group by category', () => {
  test('should return grouped order by category', () => {
    const mockReturnValue = groupOrderByCategory(axiosDataGetOrders);
    expect(mockReturnValue).toStrictEqual(axiosDataGetOrdersResolved);
  });
});
