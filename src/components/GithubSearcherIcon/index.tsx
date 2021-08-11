import { theme } from 'styles/theme';
import { LineSeparator } from 'components/LineSeparator';

import * as S from './styles';
import { GithubSearcherIconProps } from './types';

export function GithubSearcherIcon({
  separator = false,
}: GithubSearcherIconProps) {
  return (
    <S.Wrapper separator={separator}>
      <svg
        fill={theme.color.primary}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 223 226'
      >
        <title>GitHub Searcher Icon</title>
        <path d='M77.4616 147.493c1.2959 1.312 2.3239 2.87 3.0253 4.585.7014 1.714 1.0624 3.552 1.0624 5.409 0 1.856-.361 3.694-1.0624 5.409-.7014 1.715-1.7294 3.272-3.0253 4.584l-53.6594 54.381c-2.6134 2.651-6.1586 4.141-9.8558 4.142-3.6972.001-7.24352-1.486-9.85876-4.135-2.61525-2.648-4.08520938-6.241-4.08651384-9.988-.00130447-3.747 1.46614384-7.341 4.07954384-9.991l53.65943-54.382c1.2944-1.313 2.8315-2.355 4.5235-3.066 1.692-.71 3.5056-1.076 5.3372-1.076 1.8317 0 3.6453.366 5.3373 1.076 1.692.711 3.2291 1.753 4.5235 3.066v-.014z' />
        <path d='M55.75 91.8125c0 10.2025 1.9828 20.3045 5.8351 29.7295 3.8523 9.426 9.4988 17.99 16.617 25.204 7.1182 7.214 15.5687 12.936 24.8689 16.84 9.301 3.905 19.269 5.914 29.335 5.914 10.067 0 20.035-2.009 29.335-5.914 9.301-3.904 17.751-9.626 24.869-16.84 7.119-7.214 12.765-15.778 16.617-25.204 3.853-9.425 5.835-19.527 5.835-29.7295 0-20.604-8.076-40.3641-22.452-54.9334-14.375-14.5692-33.873-22.7541-54.204-22.7541-20.33 0-39.8281 8.1849-54.2039 22.7541C63.8263 51.4484 55.75 71.2085 55.75 91.8125zm76.656 91.8125c-24.027 0-47.0696-9.673-64.0592-26.891-16.9896-17.218-26.5343-40.571-26.5343-64.9215 0-24.3502 9.5447-47.7031 26.5343-64.9212C85.3364 9.67307 108.379-.00000501 132.406-.00000396 156.433-.00000291 179.476 9.67307 196.466 26.8913 213.455 44.1094 223 67.4623 223 91.8125c0 24.3505-9.545 47.7035-26.534 64.9215-16.99 17.218-40.033 26.891-64.06 26.891z' />
        <path d='M132.364 36.3451c-13.474-.0045-26.509 4.855-36.773 13.7086-10.2634 8.8535-17.0845 21.123-19.2418 34.6117-2.1574 13.4886.4898 27.3156 7.4675 39.0056 6.9778 11.69 17.8303 20.479 30.6153 24.794 2.818.534 3.87-1.248 3.87-2.772 0-1.372-.047-5.897-.075-10.708-15.781 3.477-19.1068-6.783-19.1068-6.783-2.5832-6.669-6.3031-8.422-6.3031-8.422-5.1477-3.572.3851-3.496.3851-3.496 5.702.41 8.6988 5.925 8.6988 5.925 5.063 8.794 13.273 6.26 16.504 4.764.517-3.716 1.982-6.25 3.607-7.688-12.559-1.439-25.8508-6.374-25.8508-28.4184-.0843-5.7258 2.0119-11.264 5.8518-15.4619-.591-1.4481-2.5358-7.2975.545-15.2428 0 0 4.763-1.5433 15.603 5.8971 9.301-2.5787 19.115-2.5787 28.416 0 10.784-7.4023 15.584-5.8971 15.584-5.8971 3.081 7.9262 1.146 13.7757.554 15.2428 3.83 4.1955 5.919 9.726 5.833 15.4428 0 22.1025-13.263 26.9605-25.898 28.3895 2.029 1.782 3.842 5.287 3.842 10.651 0 7.698-.056 13.9-.056 15.786 0 1.534 1.014 3.325 3.889 2.763 12.766-4.332 23.597-13.126 30.558-24.812 6.96-11.685 9.597-25.5005 7.437-38.976-2.159-13.4755-8.973-25.7332-19.224-34.5822-10.251-8.8491-23.27-13.7127-36.732-13.7217z' />
        <path d='M97.1204 118.942c-.1221.286-.5636.371-.9393.181-.3758-.191-.6482-.581-.5167-.867.1315-.286.573-.372.9394-.181.3663.19.6481.581.5072.867h.0094zm2.3016 2.601c-.2724.257-.7985.133-1.1648-.267-.1712-.141-.2831-.342-.3128-.563-.0297-.222.0251-.446.1531-.628.2818-.257.7891-.133 1.1648.267.3757.4.4415.952.1597 1.191zm2.236 3.315c-.348.248-.94 0-1.269-.495-.328-.496-.347-1.125 0-1.372.348-.248.94 0 1.269.486.328.485.347 1.133 0 1.381zm3.1 3.201c-.115.084-.244.144-.382.176-.137.033-.279.037-.418.013-.139-.024-.272-.076-.391-.152-.12-.077-.222-.177-.303-.294-.498-.467-.639-1.125-.319-1.467.319-.343.939-.258 1.465.219.526.476.639 1.124.31 1.467l.038.038zm4.189 1.858c-.141.447-.77.657-1.418.466-.649-.19-1.062-.724-.94-1.181.122-.457.771-.667 1.419-.467s1.061.724.939 1.182zm4.64.343c0 .476-.526.867-1.202.876-.676.01-1.221-.362-1.231-.829-.009-.467.526-.876 1.212-.886.686-.009 1.221.372 1.221.839zm4.322-.744c.084.467-.386.953-1.052 1.067-.667.115-1.269-.162-1.353-.628-.085-.467.394-.953 1.052-1.067.657-.115 1.268.162 1.353.628z' />
      </svg>
      {separator && (
        <LineSeparator
          thickness='thin'
          color='primary'
          orientation='vertical'
        />
      )}
    </S.Wrapper>
  );
}
