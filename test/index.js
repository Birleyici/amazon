import { userStore } from '/stores/user';

jest.mock('/stores/user', () => ({
userStore: {
signInWithEmail: jest.fn(),
},
}));

describe('singInWithEmail', () => {
beforeEach(() => {
jest.clearAllMocks();
});

it('calls userStore.signInWithEmail with the correct parameters', () => {
const user = ref({
email: 'test@email.com',
pass: 'password',
});
singInWithEmail();

expect(userStore.signInWithEmail).toHaveBeenCalledWith(user);
});
});