import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  LucideProps,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  Twitter,
  User,
  X,
  Webhook,
  //@ts-ignore
  type Icon as LucideIcon,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  logo: Webhook,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  // logo: (props: LucideProps) => (
  //   <svg viewBox="0 0 15 15" fill="currentColor" {...props}>
  //     <path
  //       fillRule="evenodd"
  //       clipRule="evenodd"
  //       d="M6.63227 2.93133L1.36132 0.994015L3.30392 6.25969L3.37783 6.49184L1.52074 6.49146C1.40434 6.49143 1.28909 6.51433 1.18156 6.55885C1.07404 6.60337 0.976343 6.66864 0.894056 6.75093C0.811769 6.83322 0.746502 6.93091 0.701981 7.03844C0.657461 7.14596 0.634559 7.26121 0.634583 7.37761C0.634608 7.49401 0.657557 7.60927 0.702122 7.71681C0.746687 7.82436 0.811994 7.92208 0.894316 8.0044C0.976637 8.08672 1.07436 8.15203 1.1819 8.19659C1.28945 8.24116 1.40471 8.26411 1.52111 8.26413L3.36237 8.25924L3.30964 8.4175L3.2991 8.44915L1.36396 13.7193L6.63411 11.7842L6.81875 11.7156L6.82441 13.5674C6.82515 13.8018 6.91898 14.0263 7.08523 14.1916C7.16755 14.2734 7.26518 14.3382 7.37253 14.3824C7.47989 14.4265 7.59488 14.449 7.71093 14.4487C7.82698 14.4484 7.94182 14.4252 8.04889 14.3805C8.15596 14.3358 8.25317 14.2704 8.33497 14.1881C8.50017 14.0219 8.59255 13.7969 8.59181 13.5625L8.59142 11.7054L8.82885 11.7846L14.0892 13.7219L12.1519 8.45099L12.0886 8.26105L13.8929 8.26142C14.009 8.26179 14.1239 8.2393 14.2313 8.19523C14.3386 8.15116 14.4362 8.08638 14.5185 8.00459C14.6008 7.92279 14.6661 7.82558 14.7109 7.7185C14.7556 7.61143 14.7787 7.49659 14.7791 7.38054C14.7794 7.26449 14.7568 7.14951 14.7127 7.04215C14.6686 6.93479 14.6038 6.83717 14.522 6.75485C14.4401 6.67252 14.3429 6.60712 14.2358 6.56237C14.1287 6.51762 14.0139 6.49439 13.8978 6.49402L12.0724 6.49364L12.1462 6.26152L14.0919 0.991379L8.82174 2.92651L8.58962 3.01088L8.58924 1.18544C8.58887 1.06939 8.56565 0.954544 8.52089 0.847452C8.47614 0.74036 8.41074 0.643122 8.32842 0.561291C8.24609 0.47946 8.14847 0.414638 8.04111 0.370526C7.93375 0.326413 7.81877 0.303874 7.70272 0.304197C7.58667 0.304519 7.47183 0.327696 7.36476 0.372404C7.25768 0.417112 7.16047 0.482475 7.07868 0.564762C6.99688 0.64705 6.9321 0.74465 6.88803 0.851988C6.84396 0.959327 6.82147 1.0743 6.82184 1.19035L6.82221 2.98413C6.76373 2.96999 6.70566 2.95414 6.6481 2.93661L6.627 2.92606L6.63227 2.93133ZM5.15015 4.79339L5.40354 5.48985C5.84859 6.69894 5.84887 8.02678 5.40431 9.23569L5.15122 9.93204L5.84757 9.67895C7.05648 9.23439 8.38432 9.23467 9.59341 9.67973L10.2899 9.93311L10.0365 9.23665C9.59143 8.02756 9.59115 6.69972 10.0357 5.49081L10.2888 4.79446L9.59245 5.04755C8.38354 5.49211 7.0557 5.49183 5.84661 5.04678L5.15015 4.79339Z"
  //       fill="currentColor"
  //     />
  //   </svg>
  // ),
  nextjs: (props: LucideProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
    </svg>
  ),
  react: (props: LucideProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
    </svg>
  ),
  javascript: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="currentColor"
      {...props}
    >
      <path d="M 6.667969 4 C 5.207031 4 4 5.207031 4 6.667969 L 4 43.332031 C 4 44.792969 5.207031 46 6.667969 46 L 43.332031 46 C 44.792969 46 46 44.796875 46 43.332031 L 46 6.667969 C 46 5.207031 44.796875 4 43.332031 4 Z M 6.667969 6 L 43.332031 6 C 43.703125 6 44 6.296875 44 6.667969 L 44 43.332031 C 44 43.703125 43.703125 44 43.332031 44 L 6.667969 44 C 6.296875 44 6 43.703125 6 43.332031 L 6 6.667969 C 6 6.296875 6.296875 6 6.667969 6 Z M 23 23 L 23 35.574219 C 23 37.503906 22.269531 38 21 38 C 19.671875 38 18.75 37.171875 18.140625 36.097656 L 15 38 C 15.910156 39.925781 18.140625 42 21.234375 42 C 24.65625 42 27 40.179688 27 36.183594 L 27 23 Z M 35.453125 23 C 32.046875 23 29.863281 25.179688 29.863281 28.042969 C 29.863281 31.148438 31.695313 32.617188 34.449219 33.789063 L 35.402344 34.199219 C 37.140625 34.960938 38 35.425781 38 36.734375 C 38 37.824219 37.171875 38.613281 35.589844 38.613281 C 33.707031 38.613281 32.816406 37.335938 32 36 L 29 38 C 30.121094 40.214844 32.132813 42 35.675781 42 C 39.300781 42 42 40.117188 42 36.683594 C 42 33.496094 40.171875 32.078125 36.925781 30.6875 L 35.972656 30.28125 C 34.335938 29.570313 33.625 29.109375 33.625 27.964844 C 33.625 27.039063 34.335938 26.328125 35.453125 26.328125 C 36.550781 26.328125 37.253906 26.792969 37.90625 27.964844 L 40.878906 26.058594 C 39.625 23.84375 37.878906 23 35.453125 23 Z"></path>
    </svg>
  ),
  html: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="currentColor"
      {...props}
    >
      <path d="M 5.28125 2 C 4.765625 2.09375 4.410156 2.574219 4.46875 3.09375 L 8 42.53125 C 8.046875 42.933594 8.332031 43.265625 8.71875 43.375 L 24.71875 47.96875 C 24.902344 48.023438 25.097656 48.023438 25.28125 47.96875 L 41.28125 43.375 C 41.667969 43.265625 41.953125 42.933594 42 42.53125 L 45.53125 3.09375 C 45.558594 2.8125 45.464844 2.535156 45.273438 2.324219 C 45.082031 2.117188 44.8125 2 44.53125 2 L 5.46875 2 C 5.4375 2 5.40625 2 5.375 2 C 5.34375 2 5.3125 2 5.28125 2 Z M 6.5625 4 L 43.4375 4 L 40.09375 41.65625 L 25 45.9375 L 9.90625 41.65625 Z M 12.53125 10.0625 C 12.015625 10.15625 11.660156 10.636719 11.71875 11.15625 L 13.0625 25.9375 C 13.09375 26.453125 13.515625 26.859375 14.03125 26.875 L 30 26.875 L 29.5625 31.46875 L 25.03125 32.4375 L 20.4375 31.46875 L 20.28125 29.84375 C 20.25 29.316406 19.808594 28.90625 19.28125 28.90625 L 14.40625 28.90625 C 14.125 28.90625 13.855469 29.023438 13.664063 29.230469 C 13.472656 29.441406 13.378906 29.71875 13.40625 30 L 13.96875 36.125 C 14 36.527344 14.269531 36.875 14.65625 37 L 24.59375 40.03125 L 24.71875 40.0625 C 24.902344 40.117188 25.097656 40.117188 25.28125 40.0625 L 35.34375 37 C 35.742188 36.886719 36.027344 36.539063 36.0625 36.125 L 37.375 21.09375 C 37.402344 20.816406 37.3125 20.542969 37.128906 20.335938 C 36.945313 20.128906 36.683594 20.007813 36.40625 20 L 19.375 20 L 19.125 16.90625 L 36.84375 16.90625 C 37.363281 16.910156 37.796875 16.515625 37.84375 16 L 38.28125 11.15625 C 38.308594 10.875 38.214844 10.597656 38.023438 10.386719 C 37.832031 10.179688 37.5625 10.0625 37.28125 10.0625 L 12.71875 10.0625 C 12.65625 10.054688 12.59375 10.054688 12.53125 10.0625 Z M 13.8125 12.0625 L 36.1875 12.0625 L 35.9375 14.90625 L 18.03125 14.90625 C 17.75 14.90625 17.480469 15.023438 17.289063 15.230469 C 17.097656 15.441406 17.003906 15.71875 17.03125 16 L 17.5 21.09375 C 17.546875 21.597656 17.964844 21.988281 18.46875 22 L 35.3125 22 L 34.125 35.28125 L 25 38.03125 L 15.875 35.28125 L 15.5 30.90625 L 18.375 30.90625 L 18.5 32.375 C 18.53125 32.816406 18.847656 33.183594 19.28125 33.28125 L 24.84375 34.4375 C 24.976563 34.464844 25.117188 34.464844 25.25 34.4375 L 30.71875 33.28125 C 31.152344 33.183594 31.46875 32.816406 31.5 32.375 L 32.09375 25.9375 C 32.109375 25.660156 32.011719 25.390625 31.824219 25.191406 C 31.632813 24.988281 31.371094 24.875 31.09375 24.875 L 14.9375 24.875 Z"></path>
    </svg>
  ),
  typescript: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="currentColor"
      {...props}
    >
      <path d="M45,4H5C4.447,4,4,4.448,4,5v40c0,0.552,0.447,1,1,1h40c0.553,0,1-0.448,1-1V5C46,4.448,45.553,4,45,4z M29,26.445h-5V42h-4	V26.445h-5V23h14V26.445z M30.121,41.112v-4.158c0,0,2.271,1.712,4.996,1.712c2.725,0,2.62-1.782,2.62-2.026	c0-2.586-7.721-2.586-7.721-8.315c0-7.791,11.25-4.717,11.25-4.717l-0.14,3.704c0,0-1.887-1.258-4.018-1.258s-2.9,1.013-2.9,2.096	c0,2.795,7.791,2.516,7.791,8.141C42,44.955,30.121,41.112,30.121,41.112z"></path>
    </svg>
  ),
  css: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      {...props}
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M 42 6 L 39 40 L 25 44 L 11 40 L 8 6 Z M 16.800781 28 L 20.800781 28 L 20.898438 30.5 L 25 31.898438 L 29.101563 30.5 L 29.398438 26 L 20.601563 26 L 20.398438 22 L 29.601563 22 L 29.898438 18 L 16.101563 18 L 15.800781 14 L 34.101563 14 L 33.601563 22 L 32.898438 33.5 L 25 36.101563 L 17.101563 33.5 Z"
      ></path>
    </svg>
  ),
  tailwindcss: (props: LucideProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  ),
  stripe: (props: LucideProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
    </svg>
  ),
  contentlayer: (props: LucideProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.43 0.92268C11.1426 0.398115 12.1177 0.407491 12.82 0.945665L19.9928 6.44198C21.0266 7.23419 21.0266 8.78771 19.9928 9.57992L17.2573 11.6761L20.0379 13.9037C21.0493 14.7139 21.022 16.2574 19.9826 17.0315L12.62 22.5153C11.8634 23.0788 10.8134 23.0332 10.1089 22.4063L4.34789 17.2802L3.54224 16.5903C-0.0530112 13.5114 0.390183 7.84094 4.41274 5.35212L10.43 0.92268ZM16.1955 10.8254L12.8515 8.14659C12.1375 7.57457 11.1235 7.56365 10.3972 8.12017L7.92298 10.0161C6.88913 10.8084 6.88913 12.3619 7.92298 13.1541L10.4154 15.064C11.129 15.6108 12.1224 15.6108 12.836 15.064L16.1773 12.5036L19.2086 14.932C19.5457 15.2021 19.5366 15.7166 19.1901 15.9747L11.8275 21.4585C11.5753 21.6463 11.2253 21.6311 10.9905 21.4221L5.2248 16.2918L4.40495 15.5895C1.48255 13.0869 1.84941 8.47338 5.13088 6.46078L5.15471 6.44617L11.2165 1.98398C11.454 1.80913 11.779 1.81225 12.0132 1.99164L19.1859 7.48796C19.5305 7.75203 19.5305 8.26987 19.1859 8.53394L16.1955 10.8254ZM15.1155 11.653L12.0291 14.018C11.7913 14.2003 11.4601 14.2003 11.2223 14.018L8.72984 12.1081C8.38523 11.844 8.38523 11.3262 8.72984 11.0621L11.2041 9.16615C11.4462 8.98065 11.7842 8.98429 12.0222 9.17496L15.1155 11.653Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5"
      ></path>
    </svg>
  ),
  firebase: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
      fill="currentColor"
    >
      <path d="M21.612,17.714l-2.125-13c-0.059-0.358-0.307-0.657-0.649-0.78c-0.342-0.121-0.724-0.05-0.997,0.189l-3.247,2.845	l-1.829-3.551c-0.166-0.321-0.492-0.528-0.853-0.541c-0.362-0.013-0.701,0.169-0.89,0.478L9.93,5.14L7.592,0.521	c-0.191-0.377-0.603-0.585-1.019-0.54c-0.42,0.054-0.76,0.366-0.85,0.78l-3.7,17.026c-0.117,0.539,0.225,1.072,0.765,1.189	c0.027,0.006,0.054,0.005,0.081,0.009c0.003,0.001,0.004,0.004,0.007,0.005l8.455,4.875C11.485,23.955,11.657,24,11.83,24	c0.174,0,0.348-0.045,0.503-0.136l8.795-5.125C21.486,18.53,21.679,18.123,21.612,17.714z M11.801,5.915l1.242,2.411l-1.039,0.91	l-1.012-1.998L11.801,5.915z M10.451,10.597l-3.244,2.842l2.56-4.193L10.451,10.597z M7.079,3.937l1.626,3.211l-3.607,5.907	L7.079,3.937z M11.827,21.844l-6.742-3.887l7.357-6.446c0.007-0.008,0.016-0.012,0.023-0.02l5.339-4.677l1.724,10.543L11.827,21.844	z"></path>
    </svg>
  ),
  express: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      {...props}
      fill="currentColor"
    >
      <path
        fill="#212121"
        d="M23.697,37.56h1.18c0.84,0,1.631-0.392,2.139-1.061l7.485-9.847l7.485,9.847	c0.508,0.668,1.299,1.061,2.139,1.061h1.18L35.756,25l9.121-12h-1.18c-0.84,0-1.631,0.392-2.139,1.061L34.5,23.347l-7.059-9.287	C26.933,13.392,26.142,13,25.302,13h-1.18l9.121,12L23.697,37.56z"
      ></path>
      <path
        fill="#212121"
        d="M24,26v-3c0-6.675-5.945-11.961-12.829-10.852C5.812,13.011,2,17.857,2,23.284L2,24v2v0.142	c0,6.553,4.777,11.786,10.868,11.858c5.092,0.06,9.389-3.344,10.707-7.999h-1.028c-0.62,0-1.182,0.355-1.451,0.913	c-1.739,3.595-5.789,5.862-10.228,4.842C6.776,34.815,4,30.981,4,26.783V26H24z M4,23.71c0-4.708,2.804-8.557,6.924-9.478	C16.798,12.92,22,17.352,22,23v1H4V23.71z"
      ></path>
    </svg>
  ),
  axios: (props: LucideProps) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="currentColor"
    >
      <path d="M11.0683 2.89968V22.2973l-2.11399 1.70265V7.8638H4.975l6.0933-4.96412zM14.93426 0v15.76724H19.025l-6.20044 5.08865V1.4689L14.93426 0z" />
    </svg>
  ),
  supabase: (props: LucideProps) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="currentColor"
    >
      <title>Supabase</title>
      <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z" />
    </svg>
  ),
  prisma: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      {...props}
      fill="currentColor"
    >
      <path d="M44.674,37.568L27.405,1.49c-0.89-1.859-3.473-2.012-4.575-0.271L3.679,31.461c-0.413,0.652-0.401,1.486,0.03,2.126	l9.647,14.323c0.599,0.889,1.7,1.29,2.729,0.994l26.994-7.775C44.596,40.692,45.357,38.994,44.674,37.568z M40.86,38.865	l-22.703,6.369c-0.526,0.148-1.02-0.318-0.906-0.853L25.3,6.749c0.145-0.678,1.064-0.788,1.364-0.163l14.843,30.881	C41.766,38.033,41.459,38.697,40.86,38.865z"></path>
    </svg>
  ),
  git: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      {...props}
      fill="currentColor"
    >
      <path d="M 46.792969 22.089844 L 27.910156 3.207031 C 27.109375 2.402344 26.054688 2 25 2 C 23.945313 2 22.890625 2.402344 22.089844 3.207031 L 18.355469 6.941406 L 22.976563 11.5625 C 24.511719 10.660156 26.511719 10.855469 27.828125 12.171875 C 29.144531 13.488281 29.335938 15.488281 28.433594 17.019531 L 32.976563 21.5625 C 34.511719 20.660156 36.511719 20.855469 37.828125 22.171875 C 39.390625 23.734375 39.390625 26.265625 37.828125 27.828125 C 36.265625 29.390625 33.734375 29.390625 32.171875 27.828125 C 30.855469 26.511719 30.660156 24.511719 31.5625 22.976563 L 27.019531 18.433594 C 26.695313 18.625 26.355469 18.765625 26 18.855469 L 26 31.140625 C 27.722656 31.585938 29 33.136719 29 35 C 29 37.210938 27.210938 39 25 39 C 22.789063 39 21 37.210938 21 35 C 21 33.136719 22.277344 31.585938 24 31.140625 L 24 18.855469 C 23.332031 18.683594 22.695313 18.351563 22.171875 17.828125 C 20.855469 16.511719 20.664063 14.511719 21.566406 12.980469 L 16.941406 8.355469 L 3.207031 22.089844 C 1.597656 23.695313 1.597656 26.304688 3.207031 27.910156 L 22.089844 46.792969 C 22.890625 47.597656 23.945313 48 25 48 C 26.054688 48 27.109375 47.597656 27.910156 46.792969 L 46.792969 27.910156 C 48.402344 26.304688 48.402344 23.695313 46.792969 22.089844 Z"></path>
    </svg>
  ),
  figma: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      {...props}
      fill="currentColor"
    >
      <path d="M25 2v14h-7c-3.855 0-7-3.145-7-7 0-3.855 3.145-7 7-7H25zM25 18v14h-7c-3.855 0-7-3.145-7-7 0-3.855 3.145-7 7-7H25zM25 34v7c0 3.855-3.145 7-7 7s-7-3.145-7-7c0-3.855 3.145-7 7-7H25zM41 9c0 3.855-3.145 7-7 7h-7V2h7C37.855 2 41 5.145 41 9zM34 18A7 7 0 1034 32 7 7 0 1034 18z"></path>
    </svg>
  ),
  openai: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      {...props}
      fill="currentColor"
    >
      <path d="M 14.070312 2 C 11.330615 2 8.9844456 3.7162572 8.0390625 6.1269531 C 6.061324 6.3911222 4.2941948 7.5446684 3.2773438 9.3066406 C 1.9078196 11.678948 2.2198602 14.567816 3.8339844 16.591797 C 3.0745422 18.436097 3.1891418 20.543674 4.2050781 22.304688 C 5.5751778 24.677992 8.2359331 25.852135 10.796875 25.464844 C 12.014412 27.045167 13.895916 28 15.929688 28 C 18.669385 28 21.015554 26.283743 21.960938 23.873047 C 23.938676 23.608878 25.705805 22.455332 26.722656 20.693359 C 28.09218 18.321052 27.78014 15.432184 26.166016 13.408203 C 26.925458 11.563903 26.810858 9.4563257 25.794922 7.6953125 C 24.424822 5.3220082 21.764067 4.1478652 19.203125 4.5351562 C 17.985588 2.9548328 16.104084 2 14.070312 2 z M 14.070312 4 C 15.226446 4 16.310639 4.4546405 17.130859 5.2265625 C 17.068225 5.2600447 17.003357 5.2865019 16.941406 5.3222656 L 12.501953 7.8867188 C 12.039953 8.1527187 11.753953 8.6456875 11.751953 9.1796875 L 11.724609 15.146484 L 9.5898438 13.900391 L 9.5898438 8.4804688 C 9.5898438 6.0104687 11.600312 4 14.070312 4 z M 20.492188 6.4667969 C 21.927441 6.5689063 23.290625 7.3584375 24.0625 8.6953125 C 24.640485 9.696213 24.789458 10.862812 24.53125 11.958984 C 24.470201 11.920997 24.414287 11.878008 24.351562 11.841797 L 19.910156 9.2773438 C 19.448156 9.0113437 18.879016 9.0103906 18.416016 9.2753906 L 13.236328 12.236328 L 13.248047 9.765625 L 17.941406 7.0546875 C 18.743531 6.5915625 19.631035 6.4055313 20.492188 6.4667969 z M 7.5996094 8.2675781 C 7.5972783 8.3387539 7.5898438 8.4087418 7.5898438 8.4804688 L 7.5898438 13.607422 C 7.5898438 14.141422 7.8729844 14.635297 8.3339844 14.904297 L 13.488281 17.910156 L 11.34375 19.134766 L 6.6484375 16.425781 C 4.5094375 15.190781 3.7747656 12.443687 5.0097656 10.304688 C 5.5874162 9.3043657 6.522013 8.5923015 7.5996094 8.2675781 z M 18.65625 10.865234 L 23.351562 13.574219 C 25.490562 14.809219 26.225234 17.556313 24.990234 19.695312 C 24.412584 20.695634 23.477987 21.407698 22.400391 21.732422 C 22.402722 21.661246 22.410156 21.591258 22.410156 21.519531 L 22.410156 16.392578 C 22.410156 15.858578 22.127016 15.364703 21.666016 15.095703 L 16.511719 12.089844 L 18.65625 10.865234 z M 15.009766 12.947266 L 16.78125 13.980469 L 16.771484 16.035156 L 14.990234 17.052734 L 13.21875 16.017578 L 13.228516 13.964844 L 15.009766 12.947266 z M 18.275391 14.853516 L 20.410156 16.099609 L 20.410156 21.519531 C 20.410156 23.989531 18.399687 26 15.929688 26 C 14.773554 26 13.689361 25.54536 12.869141 24.773438 C 12.931775 24.739955 12.996643 24.713498 13.058594 24.677734 L 17.498047 22.113281 C 17.960047 21.847281 18.246047 21.354312 18.248047 20.820312 L 18.275391 14.853516 z M 16.763672 17.763672 L 16.751953 20.234375 L 12.058594 22.945312 C 9.9195938 24.180312 7.1725 23.443687 5.9375 21.304688 C 5.3595152 20.303787 5.2105423 19.137188 5.46875 18.041016 C 5.5297994 18.079003 5.5857129 18.121992 5.6484375 18.158203 L 10.089844 20.722656 C 10.551844 20.988656 11.120984 20.989609 11.583984 20.724609 L 16.763672 17.763672 z"></path>
    </svg>
  ),

  clerk: (props: LucideProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        d="M19.116 3.1608L16.2354 6.04135C16.1449 6.13177 16.0266 6.18918 15.8996 6.20437C15.7725 6.21956 15.6441 6.19165 15.5348 6.12513C14.4017 5.44155 13.0949 5.10063 11.7722 5.14354C10.4495 5.18645 9.16759 5.61134 8.08114 6.36692C7.41295 6.83202 6.83276 7.41221 6.36765 8.0804C5.61297 9.16751 5.18848 10.4495 5.14524 11.7722C5.10201 13.0949 5.44187 14.4019 6.12395 15.536C6.19 15.6451 6.21764 15.7731 6.20246 15.8998C6.18728 16.0264 6.13015 16.1443 6.04018 16.2347L3.15962 19.1152C3.10162 19.1736 3.03168 19.2188 2.95459 19.2476C2.87751 19.2765 2.79511 19.2883 2.71302 19.2824C2.63093 19.2764 2.5511 19.2528 2.479 19.2131C2.40689 19.1734 2.34422 19.1186 2.29527 19.0524C0.736704 16.9101 -0.0687588 14.3121 0.0046021 11.6639C0.077963 9.01568 1.02602 6.46625 2.70079 4.41354C3.21208 3.78549 3.78622 3.21134 4.41428 2.70006C6.46683 1.02574 9.01589 0.0779624 11.6637 0.00460332C14.3115 -0.0687557 16.9091 0.736432 19.0512 2.29453C19.1179 2.34332 19.1731 2.40598 19.2131 2.47818C19.2532 2.55038 19.2771 2.6304 19.2833 2.71274C19.2895 2.79508 19.2777 2.87778 19.2488 2.95513C19.2199 3.03248 19.1746 3.10265 19.116 3.1608Z"
        fill="currentColor"
      />
      <path
        d="M19.1135 20.8289L16.2329 17.9483C16.1424 17.8579 16.0241 17.8005 15.8971 17.7853C15.7701 17.7701 15.6416 17.798 15.5323 17.8645C14.4639 18.509 13.2398 18.8497 11.9921 18.8497C10.7443 18.8497 9.52022 18.509 8.45181 17.8645C8.34252 17.798 8.21406 17.7701 8.08701 17.7853C7.95997 17.8005 7.84171 17.8579 7.75119 17.9483L4.87063 20.8289C4.81022 20.8869 4.76333 20.9576 4.73329 21.0358C4.70324 21.114 4.69078 21.1979 4.69678 21.2815C4.70277 21.3651 4.72708 21.4463 4.76799 21.5194C4.80889 21.5926 4.86538 21.6558 4.93346 21.7046C6.98391 23.1965 9.45442 24.0001 11.9902 24.0001C14.5259 24.0001 16.9964 23.1965 19.0469 21.7046C19.1152 21.6561 19.172 21.5931 19.2133 21.5201C19.2545 21.4471 19.2792 21.366 19.2856 21.2824C19.2919 21.1988 19.2798 21.1148 19.2501 21.0365C19.2203 20.9581 19.1737 20.8872 19.1135 20.8289V20.8289Z"
        fill="currentColor"
      />
      <path
        d="M11.9973 15.4223C13.8899 15.4223 15.4243 13.888 15.4243 11.9953C15.4243 10.1027 13.8899 8.56836 11.9973 8.56836C10.1046 8.56836 8.57031 10.1027 8.57031 11.9953C8.57031 13.888 10.1046 15.4223 11.9973 15.4223Z"
        fill="currentColor"
      />
    </svg>
  ),
  twitter: Twitter,
  check: Check,
};
