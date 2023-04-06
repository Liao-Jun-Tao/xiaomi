<template>
	<div class="popularity">
		<div class="hot-title">
			<div class="hot-choose">人气上新</div>
			<div class="hot-content">
				<p class="more">最新上架</p>
				<van-icon name="arrow" class="arrow" />
			</div>
		</div>
		<div class="update">
			<div class="update-wrapper">
				<div class="update-content content-width">
					<img
						class="update-photo"
						src="https://img.youpin.mi-img.com/youpin_gms/efcee5f8_e98f_47b9_8060_b829974b8c89.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800" />
				</div>
				<div>米家分体露营灯</div>
			</div>
			<div class="update-wrapper">
				<div class="update-content">
					<img
						class="update-photo"
						src="https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202211091857_318d92254852b426ea10aa6339092d40.png" />
				</div>
				<div>米家冰箱450L</div>
			</div>
			<div class="update-wrapper">
				<div class="update-content">
					<img
						class="update-photo"
						src="https://img.youpin.mi-img.com/youpin_gms/0a3f81f6_dc4e_488e_9522_3bcd23e8eae7.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800" />
				</div>
				<div>小米智能洗碗机</div>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="stylus" scoped>
@import '../../../common/mixin.styl'
.popularity {
        .hot-title {
            fj(space-between);

            .hot-choose {
                font-size: 0.48rem;
                font-weight: 700;
                margin: 0 0.133333rem;
                color: #313131;
            }

            .hot-content {
                fj();
                margin: 0 0.4rem;
                color: #6f6f6f;
                align-items: center;

                .more {
                    font-size: 0.32rem;
                    margin: 0 0.133333rem;
                }
            }
        }

        .update {
            fj();
            margin: 0 10px
            .update-wrapper {
                text-align: center;
                .update-content {
                    background-color: #f8f8f8;
                    margin 0 auto
                    text-align: center;

                    .update-photo {
                        wh(2.133333rem, 2.133333rem);
                    }
                }
            }
        }
    }

.content-width {
    width: 4.8rem
}
</style>
