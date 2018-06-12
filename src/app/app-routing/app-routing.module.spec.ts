import { AppRoutingModule } from './app-routing.module';

describe('AppRoutingModule', () => {
  let appRootingModule: AppRoutingModule;

  beforeEach(() => {
    appRootingModule = new AppRoutingModule();
  });

  it('should create an instance', () => {
    expect(appRootingModule).toBeTruthy();
  });
});
