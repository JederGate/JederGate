/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */
import {
  ContentLayout,
  EmptyStateLayout,
  HeaderLayout,
  LinkButton,
  Main,
} from '@strapi/design-system';
import { useFocusWhenNavigate } from '@strapi/helper-plugin';
import { ArrowRight, EmptyPictures } from '@strapi/icons';
import { useIntl } from 'react-intl';

export const NotFoundPage = () => {
  const { formatMessage } = useIntl();
  useFocusWhenNavigate();

  return (
    <Main labelledBy="title">
      <HeaderLayout
        id="title"
        title={formatMessage({
          id: 'content-manager.pageNotFound',
          defaultMessage: 'Page not found',
        })}
      />
      <ContentLayout>
        <EmptyStateLayout
          action={
            <LinkButton variant="secondary" endIcon={<ArrowRight />} to="/">
              {formatMessage({
                id: 'app.components.NotFoundPage.back',
                defaultMessage: 'Back to homepage',
              })}
            </LinkButton>
          }
          content={formatMessage({
            id: 'app.page.not.found',
            defaultMessage: "Oops! We can't seem to find the page you're looging for...",
          })}
          hasRadius
          icon={<EmptyPictures width="10rem" />}
          shadow="tableShadow"
        />
      </ContentLayout>
    </Main>
  );
};
